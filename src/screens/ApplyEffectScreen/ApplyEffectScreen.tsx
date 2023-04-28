import {
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'
import React, {useState} from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import colors from '../../theme/colors'
import {useAuthContext} from '../../contexts/AuthContext'
import { TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { applyFilter } from '../../utils/utils'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const filters = ["original", "grayscale", "sepia", "tint", "saturate"]

const ApplyEffectScreen = () => {
  const [effect, setEffect] = useState("original")

  const navigation = useNavigation()
  const {top} = useSafeAreaInsets()
  const {image} = useRoute().params

  return (
      <View style={{...styles.container, paddingTop: top}}>
        <View style={styles.heaerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={30} />
          </TouchableOpacity>
         
          <Feather name="compass" size={30}/>
          <TouchableOpacity onPress={() => navigation.navigate("Create", {image: image, filter: effect})}>
             <Feather name="arrow-right" size={30} color={"blue"}/>
          </TouchableOpacity>
        </View>

        <View style={styles.mainImageWrapper}>
          {applyFilter(effect, image, styles.mainImage)}
        </View>

        <View style={styles.effectPreviewWrapper}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filters}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => setEffect(item)}
                style={styles.previewImageWRapper}
              >
                <Text style={styles.previewTitle}>{item.toUpperCase()}</Text>
                {applyFilter(item, image, styles.previewImage)}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
  progressContainer: {
    backgroundColor: colors.lightgrey,
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
  container: {
    flex: 1,
  },
  heaerWrapper: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  effectPreviewWrapper: {
    marginTop: '15%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  imageIcon: {
    flex: 1,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    color: colors.primary,
  },
  footerSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
  },
  footerTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: colors.black,
  },
  mainImage: {
    width: width,
    height: height / 2,
  },
  previewImage: {
    width: width / 4,
    height: width / 4,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previewImageWRapper: {
    alignItems: 'center',
    marginRight: 10,
  },
})

export default ApplyEffectScreen
