import { useState } from "react";
import { Modal } from "keep-react";
import YouTube from 'react-youtube';
import { IoMdCloseCircleOutline, IoMdPlay  } from "react-icons/io";

interface Props  {
  trailerKey:string
}

export const ModalTrailer :React.FC<Props> = ({ trailerKey }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickOne = () => {
    setShowModal(!showModal);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <button
        onClick={onClickOne}
        className="px-6 py-3 bg-secondary rounded-full text-white  hover:text-black transform hover:translate-y-[-2px] transition-transform duration-300 ease-in-out"
      >
        <span className="inline-block mr-2 align-middle">
          <IoMdPlay />
        </span>
        Watch Trailer
      </button>

      <Modal
      size="2xl"
      show={showModal}
      position="center"
      style={{ 
        background: '#000', 
        padding: 0, 
        margin: 0 
      }}
      onClose={onCloseModal}
    >
      <Modal.Body className="bg-[#000] ">
        <div className="flex justify-end">
          <IoMdCloseCircleOutline className="w-8 h-8" onClick={onClickOne} />
        </div>
        <YouTube
          videoId={trailerKey}
          className="w-full h-72"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
              controls: 1,
              cc_load_policy: 0,
              fs: 1,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </Modal.Body>
    </Modal>

    </>
  );
}








