

import FormEditar from "@/components/crud/editar";
import { fetchPostbyId } from "../../../../../actions/post-individual/actions";

export default async function Page({ params }: { params: { id: string } }) {

    const id = parseInt(params.id, 10)
    const post = await fetchPostbyId(id)
  return (
    <div className="bg-gradient-to-bl from-[#4095C9] from-20%  to-[#A8DADC] to-99%">
      <FormEditar post={post}/>
    </div>
  );
}
