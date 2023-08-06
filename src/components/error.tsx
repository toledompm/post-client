import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ErrorBanner() {
  return (
    <div className="flex justify-center text-2xl">
      <div>
        <div className="flex justify-center text-4xl m-4">
          <FontAwesomeIcon icon={faHeartBroken} />
        </div>
        <p>{"Something Went Wrong :("}</p>
      </div>
    </div>
  );
}
