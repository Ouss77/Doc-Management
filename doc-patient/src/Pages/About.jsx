import Header from "../Components/Header"
import doc from '../assets/doc1.jpg'
import doc2 from '../assets/doc2.jpg'

function About() {
  return (
    <dispatchEvent>
<Header/>
          <section className="overflow-hidden pt-20 pb-12 lg:pt-[60px] lg:pb-[90px] bg-white dark:bg-dark bg-[url('./assets/doc.jpg')] h-full bg-no-repeat bg-cover ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={doc}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={doc2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Qui est Mohammed Sassour ?
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Consulte le Medecin Mohammed Sassour
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">

                Mohammed Sassour est un médecin généraliste et ancien militaire, ayant occupé le poste de médecin chef au sein des forces armées. Fort d'une longue expérience au service militaire, il a acquis une expertise précieuse dans la prise en charge médicale des personnels militaires. 
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                En plus de ses qualifications en médecine générale, Mohammed Sassour détient des diplômes spécialisés dans le domaine du sport et des maladies sexuellement transmissibles. Cette combinaison de compétences lui permet d'offrir des soins complets et adaptés à diverses situations médicales, tant dans le domaine de la santé générale que dans celui de la médecine 
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </dispatchEvent>
  
  )
}

export default About