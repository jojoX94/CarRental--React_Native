interface UserModel {
  id: number;
  fullname: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updated_at: Date;
}

export default UserModel;
