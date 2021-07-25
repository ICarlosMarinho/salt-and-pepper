import ViewContainer from "../ViewContainer";
import SuccessModal from "../../Components/SuccessModal";

export default function RegisterContainer({
  children,
  title,
  modalVisible,
  setModalVisible,
  backTo,
}) {
  return (
    <>
      <ViewContainer>
        <h2>{title}</h2>
        {children}
      </ViewContainer>
      <SuccessModal
        backTo={backTo}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </>
  );
}
