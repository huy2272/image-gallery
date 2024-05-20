import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} className="h-96 w-96" />
    </div>
  );
}
