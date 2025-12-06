export class CoordinateValidator {
    validate(latitude, longitude) {
        if (!latitude || !longitude) {
            return {
                isValid: false,
                message: 'Заполните оба поля!',
                fieldId: !latitude ? 'lat' : 'lon'
            };
        }
        
        const latNum = parseFloat(latitude);
        const lonNum = parseFloat(longitude);
        
        if (isNaN(latNum) || isNaN(lonNum)) {
            return {
                isValid: false,
                message: 'Введите числовые значения!',
                fieldId: isNaN(latNum) ? 'lat' : 'lon'
            };
        }
        
        if (latNum < -90 || latNum > 90) {
            return {
                isValid: false,
                message: 'Широта должна быть от -90 до 90',
                fieldId: 'lat'
            };
        }
        
        if (lonNum < -180 || lonNum > 180) {
            return {
                isValid: false,
                message: 'Долгота должна быть от -180 до 180',
                fieldId: 'lon'
            };
        }
        
        return {
            isValid: true,
            latitude: latNum,
            longitude: lonNum
        };
    }
}