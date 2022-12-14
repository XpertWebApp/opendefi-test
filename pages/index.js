import { useState } from "react"
import PopupModal from "./components/modal"


export default function Home() {
  const [openPopup, setOpenPopup] = useState(false)

  const handlePopup = () => setOpenPopup(true)
  const onCloseModal = () => setOpenPopup(false)

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button onClick={handlePopup} className='bg-primary h-10 rounded text-white px-5' type="button" >Open Modal
      </button>
      <PopupModal
        open={openPopup}
        onCloseModal={onCloseModal}
      />
    </div>
  )
}
