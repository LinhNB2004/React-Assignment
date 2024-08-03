import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export interface IUser {
  id: number | string;
  email: string;
  password: string;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();
  const onSubmit = async (userdata: IUser) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        userdata
      );
      alert("Đăng kí thành công");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-4 flex flex-col bg-slate-200  p-9 mt-[100px] w-[50%] m-auto"
    >
      <input
        type="text"
        placeholder="Nhập email "
        {...register("email", {
          required: true,
          pattern: /^\S+@(\S+\.)+\S{2,6}$/,
        })}
        className="p-3"
      />
      {errors.email && (
        <span className="text-red-700">Sai định dạng email</span>
      )}

      <input
        type="text"
        placeholder="Mật khẩu"
        {...register("password", { required: true, minLength: 6 })}
        className="p-3"
      />
      {errors.password && (
        <span className="text-red-700">
          Không được để trống và ít nhất 6 kí tự
        </span>
      )}

      <button className="bg-violet-700 w-[25%] p-3 text-white font-bold ml-[40%]">
        Đăng ký
      </button>
    </form>
  );
};

export default Register;
