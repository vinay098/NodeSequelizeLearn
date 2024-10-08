import { promises } from "dns";
import Student from "../models/student";
import { StudentDTO } from "../dtos/studentDtos";

class StudentRepository{

    private ToStudentDto(student: Student): StudentDTO{
        return {
            id: student.id,
            name: student.name,
            age: student.age,
            major: student.major
        }
    }

    private ToStudent(studentDto: StudentDTO): Student{
        return Student.build({
            name: studentDto.name,
            age: studentDto.age,
            major: studentDto.major,
        });
    }

    public async GetAllStudent(): Promise<StudentDTO[]>{
        const students = await Student.findAll();
        return students.map(this.ToStudentDto);
    }

    public async GetStudentById(id: number): Promise<StudentDTO | null>{
        const student = await Student.findByPk(id);
        return student ? this.ToStudentDto(student) : null;
    }

    public async CreateStudent(studentDto: StudentDTO): Promise<StudentDTO>{
        const stu = this.ToStudent(studentDto);
        const insertedStudent = await Student.create(stu as any); 
        return this.ToStudentDto(insertedStudent);
    }

    public async updateStudent(id: number, studentDto: Partial<StudentDTO>): Promise<[number, StudentDTO[]]> {
        const [updated] = await Student.update(studentDto, { where: { id } });
        if (updated) {
          const updatedStudent = await Student.findByPk(id);
          return [updated, updatedStudent ? [this.ToStudentDto(updatedStudent)] : []];
        }
        return [0, []];
      }
    
      public async deleteStudent(id: number): Promise<number> {
        return await Student.destroy({ where: { id } });
      }
}

export default new StudentRepository();