import React, { useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { dataVideo } from "./DataBase";
import SingleReels from "./SingleReels";

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlechangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={dataVideo}
      onChangeIndex={handlechangeIndexValue}
      vertical={true}
      renderItem={({ item, index }) => (
        <SingleReels item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsComponent;
