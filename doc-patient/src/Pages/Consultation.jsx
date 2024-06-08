import AddConsultation from "../Components/Consultation/AddConsultation";
import Header from "../Components/Header";

function Consultation() {
  return (
    <div className="bg-[url('./assets/doc.jpg')] h-screen bg-no-repeat bg-cover ">
              <Header />
                
            <AddConsultation />

    </div>
  )
}

export default Consultation