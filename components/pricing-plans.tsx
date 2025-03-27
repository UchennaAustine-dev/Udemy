import { Check, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Personal Plan */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Personal Plan</h3>
        <p className="text-sm text-gray-600 mb-4">For you</p>

        <div className="flex items-center mb-6">
          <Users className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-sm text-gray-600">Individual</span>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800">
            Starting at $20.00 per month
          </h4>
          <p className="text-xs text-gray-600">
            Billed monthly or annually. Cancel anytime.
          </p>
        </div>

        <Button className="w-full bg-purple-700 hover:bg-purple-800 mb-6 flex items-center justify-center">
          Try it free <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Access to 12,000+ top courses</span>
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
        </ul>
      </div>

      {/* Team Plan */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Team Plan</h3>
        <p className="text-sm text-gray-600 mb-4">For your team</p>

        <div className="flex items-center mb-6">
          <Users className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-sm text-gray-600">2 to 20 people</span>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800">$30.00 a month per user</h4>
          <p className="text-xs text-gray-600">
            Billed annually. Cancel anytime.
          </p>
        </div>

        <Button className="w-full bg-purple-700 hover:bg-purple-800 mb-6 flex items-center justify-center">
          Try it free <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Access to 12,000+ top courses</span>
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
            <span className="text-sm">Analytics and adoption reports</span>
          </li>
        </ul>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Enterprise Plan</h3>
        <p className="text-sm text-gray-600 mb-4">
          For your whole organization
        </p>

        <div className="flex items-center mb-6">
          <Users className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-sm text-gray-600">More than 20 people</span>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800">Contact sales for pricing</h4>
        </div>

        <Button className="w-full bg-purple-700 hover:bg-purple-800 mb-6 flex items-center justify-center">
          Request a demo <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

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
            <span className="text-sm">Hands-on tech training with add-on</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Strategic implementation services with add-on
            </span>
          </li>
        </ul>
      </div>

      {/* Leadership Academy */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">Leadership Academy</h3>
        <p className="text-sm text-gray-600 mb-4">
          Cohort programs to develop your leaders
        </p>

        <div className="flex items-center mb-6">
          <Users className="h-5 w-5 text-gray-600 mr-2" />
          <span className="text-sm text-gray-600">Groups of 25 or more</span>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-gray-800">Contact sales for pricing</h4>
        </div>

        <Button
          variant="outline"
          className="w-full border-purple-700 text-purple-700 hover:bg-purple-50 mb-6 flex items-center justify-center"
        >
          Contact sales <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Expert-led leadership training</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Research-based content curation</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Applied learning, tool kits, and group coaching
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Asynchronous learning with collaborative discussions
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Live virtual events</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">AI-powered analytics and insights</span>
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
  );
}
