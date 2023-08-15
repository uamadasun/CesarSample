export default function ContactForm() {
  return (
    <div className="relative isolate bg-white bg-opacity-75 px-6 lg:px-8 font-serif rounded-lg w-fit sm:mx-auto">
      <div className="max-w-xl lg:max-w-4xl h-fit">
        <h2 className="text-2xl font-bold text-gray-900 text-dodger-blue-600 sm:text-center">
          Let’s talk about your project!
        </h2>
        <p className="text-lg text-gray-600 sm:text-center mb-4">
          We help companies and individuals build out their dream projects.
        </p>
        <div className=" flex flex-col gap-1 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dodger-600-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dodger-600-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Project Type
                </legend>
                <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                  <div className="flex gap-x-2.5">
                    <input
                      id="commercial"
                      name="project_type"
                      defaultValue="commercial"
                      type="radio"
                      className="mt-1 h-4 w-4 border-gray-300 text-dodger-600-600 shadow-sm focus:ring-dodger-600-600"
                    />
                    <label htmlFor="commercial">Commercial</label>
                  </div>
                  <div className="flex gap-x-2.5">
                    <input
                      id="residential"
                      name="project_type"
                      defaultValue="residential"
                      type="radio"
                      className="mt-1 h-4 w-4 border-gray-300 text-dodger-600-600 shadow-sm focus:ring-dodger-600-600"
                    />
                    <label htmlFor="residential">Residential</label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label
                  htmlFor="project_description"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Project Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="project_description"
                    name="project_description"
                    rows={2}
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dodger-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="block w-1/4 mb-2 mx-auto rounded-md bg-roman-coffee-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-dodger-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dodger-600"
              >
                Let’s talk!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
