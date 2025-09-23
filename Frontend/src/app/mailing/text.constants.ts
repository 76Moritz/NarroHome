import { EMAIL_TYPES } from "./emailTypes";

export const Email_Texts={
    incomingGroupRegistration:"Die Gruppe Illwedrische Buxtehude e.V. hat sich soeben für die Narroparty mit 1234 Mitgliedern angemeldet.Sie reisen per Privatjet an und bieten einen Auftritt"
}
export class Textbuilder{
    static buildText( groupName: string,contactPerson:string,email: string,phone: string,personAmount: number,programmType: string, travel: string):string{
        return `Die Gruppe ${groupName} hat sich soeben für die 
        Narroparty mit ${personAmount} Mitgliedern angemeldet.\n
        Sie reisen per ${travel} an und bieten ${programmType}.\n
        Kontaktperson ist ${contactPerson}, erreichbar unter ${email} und ${phone}.`
    }
}