export class UserModel {
    Id: string;
    Name: string;
    Surname: string;
    UniversityYear: number;
    GroupName: string;
    Email: string;
    Role: Role;
    jwtToken: string;
  
    constructor(
      Id: string,
      Name: string,
      Surname: string,
      UniversityYear: number,
      GroupName: string,
      Email: string,
      Role: Role,
      jwtToken: string
    ) {
      this.Id = Id;
      this.Name = Name;
      this.Surname = Surname;
      this.UniversityYear = UniversityYear;
      this.GroupName = GroupName;
      this.Email = Email;
      this.Role = Role;
      this.jwtToken = jwtToken;
    }
  }

  enum Role {
    Admin,
    User
  }