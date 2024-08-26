import Produtos from "@/components/produtos";
import Search from "@/components/search";

export default function Posts() {
  return (
    <div className="bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] min-h-screen md:p-0 ">
        <Search />
        <Produtos />
        <Produtos />
    </div>
  );
}
