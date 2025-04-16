import Wedding from "../components/prestations/Wedding";
import Conference from "../components/prestations/Conference";
import Vip from "../components/prestations/Vip";
import Party from "../components/prestations/Party";
import Corporate from "../components/prestations/Corporate";
import Luxury from "../components/prestations/Luxury";

export default function PrestationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Wedding />
      <Conference />
      <Vip />
      <Party />
      <Corporate />
      <Luxury />
    </div>
  );
}
