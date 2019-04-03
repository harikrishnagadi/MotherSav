<View
  style={{
    position: "absolute",
    marginTop: HEADER_MAX_HEIGHT-PROFILE_MAX_HEIGHT/2,
    width: width,
    alignItems: 'center'
  }}
>
  <View
    background-black
    style={{
      width: 160,
      height: 160,
      borderRadius: 80,
      position: "absolute",
      alignItems: 'center'
    }}
  >

    <Image
      source={back}
      style={{
        width: 150,
        height: 150,
        alignItems: "center",
        marginTop: 4,
        marginHorizontal: 4
      }}
    />
  </View>
</View>
<View
  style={{
    marginHorizontal: 25,
    marginTop: 350,
    position: "absolute"
  }}
>
  <Card
    style={{ width: width - 50, height: height / 2, opacity: 0.1 }}
  />
  <View style={{ marginTop: -320, marginHorizontal: 15 }}>
    <View style={{ flexDirection: "row",marginBottom: 20}}>
      <View>
        <Icons name="face" size={40} color={"black"} />
      </View>
      <View center style={{ marginHorizontal: 20 }}>
        <Text black text50 style={{ fontWeight: "400" }}>
          Christian Bale
        </Text>
      </View>
    </View>

    <View style={{ flexDirection: "row" ,marginBottom: 20}}>
      <View center>
        <Image
          source={age}
          style={{
            width: 38,
            height: 35,
            alignItems: "center",
            marginHorizontal: 3
          }}
        />
      </View>
      <View center style={{ marginHorizontal: 20 }}>
        <Text black text50 style={{ fontWeight: "400" }}>
          26
        </Text>
      </View>
    </View>

    <View style={{ flexDirection: "row" ,marginBottom: 20}}>
      <View center style={{marginHorizontal:2}}>
        <Image
          source={man}
          style={{
            width: 38,
            height: 35,
            alignItems: "center",
            marginHorizontal: 3
          }}
        />
      </View>
      <View center style={{ marginHorizontal: 17 }}>
        <Text black text50 style={{ fontWeight: "400" }}>
          Jason stathum
        </Text>
      </View>
    </View>


    <View style={{ flexDirection: "row",marginBottom: 20}}>
      <View center style={{marginHorizontal:2}}>
        <Icons name="phone" size={40} color={"black"} />
      </View>
      <View center style={{ marginHorizontal: 20 }}>
        <Text black text50 style={{ fontWeight: "400" }}>
          8330927092
        </Text>
      </View>
    </View>
