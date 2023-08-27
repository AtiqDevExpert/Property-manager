import {useRoute} from '@react-navigation/core';
import { useState } from 'react';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const HomeService = ({children, navigation}: ScreenTypes.screen) => {
  const route = useRoute();
  const investmenetdata =[
    {
      month:"March",
      amount:"2000000/-",
    },
    {
      month:"April",
      amount:"7000000/-",
    },
    {
      month:"May",
      amount:"5000000/-",
    },
  ] 

  const plotdata = [
    { 
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad ',
      mail: 'jawad@gmail.com',
      id: '1',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {Phase:"Phase 1",
    PLot:"Plot # 201204",
    Block:"Block C",
    Location:"New colony 33 street n New colony 33 street nyy....",
    price:"2,000,0000",
    width:"2000*2000",
    area:"5 Canal",
      image: null,
      name: 'aSAD Ahmad',
      mail: 'asadahmad@gmail.com',
      id: '2',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    { Phase:"Phase 1",
    PLot:"Plot # 201204",
    Block:"Block C",
    Location:"New colony 33 street n New colony 33 street nyy....",
    price:"2,000,0000",
    width:"2000*2000",
    area:"5 Canal",
      image: null,
      name: 'Nabeel Ahmad',
      mail: 'nabeelahmad@gmail.com',
      id: '3',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Alipaki Ahmad',
      mail: 'jawad@gmail.com',
      id: '4',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '5',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '6',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '7',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '8',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'jawad@gmail.com',
      id: '9',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
    {
      Phase:"Phase 1",
      PLot:"Plot # 201204",
      Block:"Block C",
      Location:"New colony 33 street n New colony 33 street nyy....",
      price:"2,000,0000",
      width:"2000*2000",
      area:"5 Canal",
      image: null,
      name: 'Jawad Ahmad',
      mail: 'nabeelismaeel1122@gmail.com',
      id: '10',
      data:[
        {
        name: 'Jawad ',
        persentage:'20%',
      },  
      {
        name: 'Jawad ',
        persentage:'20%',
      },
      {
        name: 'Jawad ',
        persentage:'20%',
      },
       ]
    },
  ];
  const [isModalVisible, setModalVisible] = useState<boolean>(true);
  const [isModalDoYouVisible, setModalDoYouVisible] = useState<boolean>(true);

  return children({
    navigation,
    investmenetdata,
    plotdata,
    isModalVisible,
    setModalVisible,
    isModalDoYouVisible,
    setModalDoYouVisible,
  } as ScreenTypes.home);
};

export default HomeService;
