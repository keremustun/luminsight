import axios from 'axios';

export class PersonService {
    async getPerson(targetEmail) {
        try {
            const response = (await axios.get(`https://localhost:7224/api/person/getPerson`, { params: { email: targetEmail } }));
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


}