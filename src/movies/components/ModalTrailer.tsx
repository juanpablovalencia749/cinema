import { useState } from "react";
import { Modal } from "keep-react";
import YouTube from 'react-youtube';
import { IoMdCloseCircleOutline } from "react-icons/io";

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
      <button  onClick={onClickOne} className="px-6 py-3 bg-secondary rounded-full text-white hover:bg-blue-800">Watch Trailer</button>

      <Modal
        size="2xl"
        show={showModal}
        position="center"
        style={{ padding: 0, margin: 0 }}
        onClose={onCloseModal}
      >
        <Modal.Body>
          <div className="flex justify-end mb-2">
            <IoMdCloseCircleOutline className="w-8 h-8" onClick={onClickOne}/>
          </div>
        <YouTube
          videoId={trailerKey}
          className="w-full h-72 p-0 m-0"
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








