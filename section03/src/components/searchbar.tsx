"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const Router = useRouter();
  const [search, setShearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShearch(e.target.value);
  };

  const onSubmit = () => {
    Router.push(`search?q=${search}`);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
