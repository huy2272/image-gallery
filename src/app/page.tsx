import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f1c14f77-ecec-49d0-8e1d-3d9aa63e06f7-lv24lb.jpg",
  "https://utfs.io/f/29605b02-fbb0-4621-9bf6-8832f3923633-brdj6d.jpeg",
  "https://utfs.io/f/515f5267-0514-4a33-b90f-a982342b1aa6-ibcluw.jpg",
  "https://utfs.io/f/84e951fa-294d-4c70-bf45-c82ccb9b5f27-nm33wo.jpg",
  "https://utfs.io/f/d8b545d7-acc9-4f0f-ac11-de577379d840-a9y11j.jpg",
  "https://utfs.io/f/4141abc8-9213-4da3-b7e4-2cd72ef5a4cc-drq4gj.jpg",
  "https://utfs.io/f/ff33a674-a8d8-4c76-8050-ee54889f9d71-6ljmg8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((img) => (
          <div key={img.id} className="w-48 ">
            <img src={img.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
