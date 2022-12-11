// 관광식당, 관광유흥음식점업, 외국인전용유흥음식점업

export interface I072401 {
  id?: string,
  serviceName? : string, // 개방서비스명
  serviceID?: string, //개방서비스아이디
  code?: string, // 개방자치단체코드
  manageID?: string, // 관리번호
  startDate?: string, // 인허가취소 일자
  permissionCancelDate?: string, // 인허가취소일자
  businessState?: string, // 영업상태구분코드
  businessStateName?: string, // 영업상태명
  businessCode?: string, // 상세영업상태코드
  businessDetailState?: string, // 상세영업상태명
  cancelDate?: string, //폐업일자
  offStartDate?: string, // 휴업시작일자
  offEndDate?: string, // 휴업종료일자
  reopenDate?: string, // 재개업일자
  telNumber?: string, // 소재지전화
  square?: string, // 소재지면적
  zipCode?: string, //소재지우편번호',
  oldAddress?: string, //소재지전체주소',
  roadAddress?: string, //도로명전체주소',
  roadZipcode?: string, //도로명우편번호',
  businessName?: string, //사업장명',
  lastUpdateDate?: string, //'최종수정시점',
  updateType?: string, //'데이터갱신구분',
  updateDate?: string, //'데이터갱신일자',
  type?: string, //업태구분명',
  latitue?: string, //좌표정보(x)',
  longitude?: string, //좌표정보(y)',
  upjongName?: string, //문화체육업종명',
  saupja?: string, //문화사업자구분명',
  areaType?: string, //지역구분명',
  totalStair?: string, //총층수',
  enviromnent?: string, //'주변환경명',
  itemList?: string, //'제작취급품목내용',
  insuranceName?: string, //보험기관명',
  buildingUsed?: string, //건물용도명',
  groundStair?: string, //지상층수',
  undergroundStair?: string, //지하층수',
  bedrommNumber?: string, //객실수',
  totalArea?: string, //건축연면적',
  englishName?: string, //영문상호명',
  englishAddress?: string, //영문상호주소',
  totalShipWeight?: string, //선박총톤수',
  shipNumber?: string, //선박척수',
  shipJewon?: string, //선박제원',
  stageArea?: string, //무대면적',
  attendantChairNumber?: string, //좌석수',
  souvenirNumber?: string, //기념품종류',
  conferenceNumber?: string, //회의실별동시수용인원',
  totalRidesArea?: string, //시설면적',
  ridesList?: string, //놀이기구수내역',
  ridesNumber?: string, //놀이시설수',
  broadcastExist?: string, //방송시설유무',
  generateorExist?: string, //발전시설유무',
  firstaddExist?: string, //의무실유무',
  informationExist?: string, //안내소유무',
  startInsuranceDate?: string, //기획여행보험시작일자',
  endInsuranceDate?: string, //기획여행보험종료일자',
  capital?: string, //자본금',
  insuracneStart?: string, //보험시작일자',
  insuracneEnd?: string, //보험시작일자',
  otherRides?: string, //부대시설내역',
  ridesArea?: string //시설규모',
}

// 일반음식점 휴게음식점
export interface I072404 {
  id?: string,
  serviceName?: string, //개방서비스명',
  serviceID?: string, //개방서비스아이디',
  code?: string, //개방자치단체코드',
  manageID?: string, //관리번호',
  startDate?: string, //인허가일자',
  permissionCancelDate?: string, //인허가취소일자',
  businessState?: string, //영업상태구분코드',
  businessStateName?: string, //영업상태명',
  businessCode?: string, //상세영업상태코드',
  businessDetailState?: string, //상세영업상태명',
  cancelDate?: string, //폐업일자',
  offStartDate?: string, //휴업시작일자',
  offEndDate?: string, //휴업종료일자',
  reopenDate?: string, //재개업일자',
  telNumber?: string, //소재지전화',
  square?: string, //소재지면적',
  zipCode?: string, //소재지우편번호',
  oldAddress?: string, //소재지전체주소',
  roadAddress?: string, //도로명전체주소',
  roadZipcode?: string, //도로명우편번호',
  businessName?: string, //사업장명',
  lastUpdateDate?: string, //최종수정시점',
  updateType?: string, //데이터갱신구분',
  updateDate?: string, //데이터갱신일자',
  type?: string, //업태구분명',
  latitue?: string, //좌표정보(x)',
  longitude?: string, //좌표정보(y)',
  treatName?: string, //위생업태명',
  serviceMan?: string, //남성종사자수',
  serviceWomen?: string, //여성종사자수',
  businessAreaType?: string, //영업장주변구분명',
  levelType?: string, //등급구분명',
  waterSupplyType?: string, //급수시설구분명',
  totalServiceNumber?: string, //총직원수',
  totalMainServiceNumber?: string, //본사직원수',
  factoryOfficeNumber?: string, //공장사무직직원수',
  factorySalesNumber?: string, //공장판매직직원수',
  factoryWorkerNumber?: string, //공장생산직직원수',
  builderOwer?: string, //건물소유구분명',
  guaranteeMoney?: string, //보증액',
  monthRate?: string, //월세액',
  multiuseBusiness?: string, //다중이용업소여부',
  totalAreaAmount?: string, //시설총규모',
  traditionalAssiged?: string, //전통업소지정번호',
  traditionalMainDish?: string, //전통업소주된음식',
  homePage?: string, //홈페이지',
  restorantType?: string, //음식점/휴계소음식점'
}

//

