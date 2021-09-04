
import { GoogleSpreadsheet, } from 'google-spreadsheet';
import moment from 'moment';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet('17Vr2_Sq7wf7MCb6DPhq8GYEFsmXOaJMsO17GpfRleRE');

const generateCupom = () => {
    const code = parseInt(moment().format('YYMMDDkkmmssSSS')).toString(16).toUpperCase();
    return code.substring(0, 4) + '-' + code.substring(4, 8) + '-' + code.substring(8, 12);
}

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];
        const data = JSON.parse(req.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A3:B3');

        const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
        const textoCell = sheetConfig.getCell(2, 1);

        let Cupom = '';
        let Promo = '';
        if (mostrarPromocaoCell.value === 'Verdadeiro') {
            Cupom = generateCupom();
            Promo = textoCell.value;
        }
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            'Data da avaliação': moment().format('DD/MM/YYYY, kk:mm'),
            Nota: parseInt(data.Nota),
            Cupom,
            Promo,
        })
        res.end(JSON.stringify({
            showCupom: Cupom !== "",
            Cupom,
            Promo
        }))
    }
    catch (err) {
        console.log(err);
    }
}