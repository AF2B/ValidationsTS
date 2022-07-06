class CpfValidation {
    static isValidCpf(cpf: string): boolean {
        if(cpf.length != 11) {
            return false;
        }else{

        const weight1: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const weight2: number[] = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

        let sum: number = 0;
        let rest: number;
        let verifyDigit: number;
        let verifyDigit2: number;

        cpf = cpf.trim();
        //cpf = cpf.replace('.', '').replace('-', ''); FIXME

        let subCpf: string = cpf.substring(0, 9);

        for(let i: number = 0; i < 9; i++){
            sum += Number(subCpf[i].toString()) * weight1[i];
        }

        rest = sum % 11;

        if(rest >= 2) {
            verifyDigit = 11 - rest;
        }else if(rest < 2) {
            verifyDigit = 0;
        }else {
            throw new Error("Error!");
        }

        subCpf = cpf.substring(0, 10);
        sum = 0;

        for(let i: number = 0; i < 10; i++) {
            sum += Number(subCpf[i].toString()) * weight2[i];
        }

        rest = sum % 11;

        if(rest >= 2) {
            verifyDigit2 = 11 - rest;
        }else if(rest < 2) {
            verifyDigit2 = 0;
        }else{
            throw new Error("Error!");
        }

        if(verifyDigit == Number(cpf[9].toString()) && verifyDigit2 == Number(cpf[10].toString())) {
            console.log("CPF Is valid!!!");
            return true;
        }else {
            console.log("CPF Is invalid!!!");
            return false;
        }
    }
    };
}

let cpf: string = "053.325.580-58"; //Random valid CPF. Need put off the "." and "-".

let test: CpfValidation = CpfValidation.isValidCpf(cpf);
console.log(test);