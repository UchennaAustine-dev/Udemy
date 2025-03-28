import { Check } from "lucide-react";

export default function AccelerateGrowthSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Accelerate growth — for you or your organization
        </h2>
        <p className="text-gray-600 mb-8">
          Reach goals faster with our various courses available. Try one free
          today or contact us to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Enterprise Plan */}
          <div className="bg-purple-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to 27,000+ top courses</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Certification prep</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Goal-focused recommendations</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">AI-powered coding exercises</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Advanced analytics and insights</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dedicated customer success team</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  International course collection featuring 15 languages
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Customizable content</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Hands-on tech training with add-on
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Strategic implementation services with add-on
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
