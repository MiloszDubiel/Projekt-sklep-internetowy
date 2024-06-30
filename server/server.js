const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const dbConfig = {
    user: `Admin`,
    password: '1qazXSW@',
    server: 'localhost',
    database: 'Sklep',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
const app = express();
const port = 3001; // Używamy portu 3001, aby nie kolidował z Reactem (3000)

app.use(cors());
app.use(bodyParser.json());

sql.connect(dbConfig, err => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/addBasket', (req, res) => {
    const { basket, email, payment} = req.body;

    if (!basket || !Array.isArray(basket) || basket.length === 0 || !email) {
        return res.status(400).send('Koszuk nie moze byc pusty i email jest wymagany.');
    }
            try {
                for (let item of basket) {
                    const { name, price, ilosc, picture } = item.props;

                    const query = `
                        INSERT INTO SzczegolyZamowienia (nazwa, zdjecie, ilosc, cena_jednostkowa, adres_email, data_zakupu, metoda_platnosci)
                        VALUES (@name, @picture, @ilosc, @price, @email, GETDATE(), @payment)
                    `;
        
                    const request = new sql.Request();
                    request.input('name', sql.NVarChar, name);
                    request.input('Email', sql.NVarChar, email);
                    request.input('ilosc', sql.Decimal(10, 2), parseFloat(ilosc));
                    request.input('price', sql.Decimal(10, 2), parseFloat(price));
                    request.input('picture', sql.NVarChar, picture);
                    request.input('payment', sql.NVarChar, payment);
                    request.query(query);
                }
                
            } catch (err) {
                console.error('Bład:', err);
                res.status(500).send(`Błąd: ${err.message}`);
            }
})

app.post('/addClient', (req, res) => {
    const { name, surname, street, email, phone, code, flat, payment } = req.body;
    if (!name || !surname || !street || !email || !phone || !code || !flat) {
        return res.status(400).send('All fields (name, surname, street, email, phone, code, flat) are required.');
    }

    const request = new sql.Request();
    // Sprawdzenie, czy klient o podanym e-mailu już istnieje
    const checkEmailQuery = `SELECT COUNT(*) AS count FROM Klienci WHERE adres_email = @Email`;
    request.input('Email', sql.NVarChar, email);
    request.query(checkEmailQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error executing query');
        }
        if (result.recordset[0].count > 0) {
            return res.status(400).send('Klient o podanym e-mail juz istnieje');
        }
        // Jeśli klient nie istnieje, wstaw nowe dane
        const insertQuery = `INSERT INTO Klienci (imie, nazwisko, adres, adres_email, telefon, nr_domu, kod_pocztowy) VALUES (@name, @surname, @street, @email, @phone, @flat, @code)`;

        const request = new sql.Request();
        request.input('name', sql.NVarChar, name);
        request.input('surname', sql.NVarChar, surname);
        request.input('street', sql.NVarChar, street);
        request.input('email', sql.NVarChar, email);
        request.input('phone', sql.NVarChar, phone);
        request.input('code', sql.NVarChar, code);
        request.input('flat', sql.NVarChar, flat);

        request.query(insertQuery, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).send('Error executing query');
            }
            res.send('Klient dodany poprawnie');
        });
    });
});

app.post('/showPrevious', async (req, res) => {
    const { email, date } = req.body;

    if (!email) {
        return res.status(400).send('Email jest wymagany.');
    }

    if(!date){
        const request = new sql.Request();
        request.input('Email', sql.NVarChar, email);
        let query = `
            SELECT * FROM dbo.GetOrdersByEmail(@Email)
        `;
        const result = await request.query(query);
        res.json(result.recordset);
    }else{
        const request = new sql.Request();
        request.input('Email', sql.NVarChar, email);
        request.input('Date', sql.NVarChar, date);
        
        let query = `
            SELECT * FROM dbo.GetOrdersByEmailAndDate(@Email, @Date)
        `;
        const result = await request.query(query);
        res.json(result.recordset);
    }
});
app.post('/showPreviousByDate', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email jest wymagany.');
    }
    try {
        const request = new sql.Request();
        request.input('Email', sql.NVarChar, email);
        let query = `
            SELECT * FROM dbo.GetTotalPriceByEmailGroupedByDate(@Email)
        `;
        const result = await request.query(query);
        res.json(result.recordset);
    } catch (err) {
        console.error('Błąd:', err);
        res.status(500).send(`Błąd: ${err.message}`);
    }
});



// Uruchom serwer
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
