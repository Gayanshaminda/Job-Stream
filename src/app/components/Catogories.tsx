import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faBullhorn,
  faCogs,
  faPhone,
  faUserTie,
  faBolt,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function JobCategories() {
  const categories = [
    { title: "Accounting/Finance", vacancies: 150, icon: faChartLine },
    { title: "Design & Development", vacancies: 100, icon: faCode },
    { title: "Marketing/Sales", vacancies: 320, icon: faBullhorn },
    { title: "Engineer/Architects", vacancies: 222, icon: faCogs },
    { title: "Media/Ad./Event", vacancies: 214, icon: faPhone },
    { title: "Production/Operation", vacancies: 155, icon: faHammer },
    { title: "Customer Support", vacancies: 200, icon: faUserTie },
    { title: "Electrician/EEE", vacancies: 321, icon: faBolt },
  ];

  return (
    <section className="bg-gray-50 py-20 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-14">Popular Job Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border border-gray-200 bg-white text-black hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center items-center mb-4 bg-orange-100 rounded-full w-16 h-16 mx-auto">
                <FontAwesomeIcon icon={category.icon} className="text-3xl text-orange-600" />
              </div>
              <h3 className="font-bold text-lg">{category.title}</h3>
              <p className="mt-2 text-gray-500">
                {category.vacancies} Job Vacancy
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
