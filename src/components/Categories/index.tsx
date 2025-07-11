import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllCategories } from "./actions";
import { TCategory } from "./types";

export function ContentCategory({ data }: { data: TCategory }) {
  return (
    <div className="flex flex-col items-center gap-y-2 relative">
      <figure className="w-16 aspect-square relative">
        <Image
          className="w-full h-full object-cover object-center"
          src="/images/icon.png"
          alt={`${data}`}
          fill
        />
      </figure>
      <span className="">{data}</span>
      <Link href={`/categories/${data}`} className="absolute inset-0"></Link>
    </div>
  );
}

const Categories = async () => {
  const data: TCategory[] = await getAllCategories();
  const categories = data.slice(0, 8);
  return (
    <section className="px-4">
      <h2 className="font-semibold mb-4">Browse Category</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category: TCategory, index: number) => (
          <ContentCategory key={index} data={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
