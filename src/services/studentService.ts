import studentRepository from '../repositories/studentRepository';
import { StudentDTO } from '../dtos/studentDtos';


class StudentService{

    public async getAllStudents(): Promise<StudentDTO[]>{
        return await studentRepository.GetAllStudent();
    }
}

export default new StudentService();