import Image from "next/image";
import { cookies } from 'next/headers'
import { v4 as uuid_v4 } from "uuid";
export default function Home() {

  const cookieStore = cookies().set("id",uuid_v4())
  console.log("cookie is",cookieStore)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      test
    </div>
  );
}
