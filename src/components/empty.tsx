import { faHourglassEmpty } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function EmptyBanner({ message }: { message: string }) {
  return (
    <div className="flex justify-center text-2xl">
      <div>
        <div className="flex justify-center text-4xl m-4">
          <FontAwesomeIcon icon={faHourglassEmpty} />
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
