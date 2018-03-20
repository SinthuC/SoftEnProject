import React from 'react';
import { 
  compose
} from 'recompose';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  togglePolicy
} from '../redux/action/signup';

const enchance = compose(
  connect(
    state => ({
      signup: state.signup
    }),
    {
      togglePolicy
    }
  )
);

const PolicyModal = props => (
  <Modal isOpen={props.signup.togglePolicy} toggle={() => props.togglePolicy(props.signup.togglePolicy)}>
    <ModalHeader>ข้อตกลงการใช้บริการ</ModalHeader>
      <ModalBody>
        <p>1.1 ท่านตกลงและยอมรับว่า ท่านจะใช้บริการเพื่อประโยชน์ส่วนตัวหรือวัตถุประสงค์ที่ถูกต้องตามกฎหมายภายใต้ข้อกำหนดและเงื่อนไขฉบับนี้ที่ระบุไว้นี้เท่านั้น และจะไม่ใช้บริการเพื่อประโยชน์ในทางการค้าหรือวัตถุประสงค์อื่นใดที่ขัดต่อกฎหมายและศีลธรรมอันดีของประชาชน </p>
        <p>1.2 หากบริษัททราบหรือได้รับแจ้งว่า ท่านดำเนินการอย่างหนึ่งอย่างใดอันเป็นการขัดต่อข้อกำหนดและเงื่อนไขที่กำหนดไว้นี้ บริษัทสงวนสิทธิที่จะ แต่ไม่จำต้องหรือเป็นหน้าที่ที่จะต้องดำเนินการหยุด ระงับ หรือไม่ให้บริการแก่ท่านต่อไป ยกเลิกมิให้ท่านเข้าสู่หรือใช้บริการ ยกเลิกสมาชิกภาพของท่าน เอาออกหรือลบเนื้อหาที่บริษัทเห็นว่าอาจทำให้เกิดปัญหาออกไปหรือที่บริษัทไม่อาจยอมรับได้ ยกเลิกบัญชีของท่าน ไม่ว่าชั่วคราวหรือถาวร รายงานการไม่ปฏิบัติตามข้อกำหนดและเงื่อนไขของบริษัทให้หน่วยงานที่มีอำนาจบังคับตามกฎหมาย และ/หรืออาจดำเนินการในทางกฎหมายกับท่านตามที่บริษัทเห็นสมควรได้ทันทีโดยไม่บอกกล่าวล่วงหน้า</p>
        <p>1.3 กรณีท่านสมัครใช้บริการใดๆ ของบริษัท แต่ท่านไม่ใช้บริการเป็นเวลา 45 วันติดต่อกัน บริษัทสงวนสิทธิยกเลิกบัญชีสมาชิกของท่าน และลบเนื้อหา และ/หรือข้อมูลส่วนบุคคลของท่านได้ทันทีโดยไม่ต้องแจ้งให้ทราบ</p>
       
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" id="cancel" onClick={() => props.togglePolicy(props.signup.togglePolicy)}>Cancel</Button>
      </ModalFooter>
  </Modal>
);


export default enchance(PolicyModal);