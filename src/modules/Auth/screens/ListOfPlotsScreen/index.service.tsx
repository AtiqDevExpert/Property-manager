import React, {useState} from 'react';
import {useRoute} from '@react-navigation/core';
import {ScreenTypes} from '../../interfaces';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
/* component containing the business logic separated from view for
 api call trigger */
const ListOfPlotsService = ({children, navigation}: ScreenTypes.screen) => {

   const [isModalVisible, setModalVisible] = useState<boolean>(false);
   const data = [
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
  return children({
    isModalVisible,
    setModalVisible,
    data,
  } as ScreenTypes.ListOfPlotsScreen);
};

export default ListOfPlotsService;
