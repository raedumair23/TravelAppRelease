import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../assets/images/index';
import CustomText from '../components/CustomText';
import HorizontalCard from '../components/VerticalCards';
import VerticalCard from '../components/HorizontalCards';
import { colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import experiences from '../data/experiences'; // 🔹 Imported experience data

const categories = ['All', 'Forest', 'Mountains', 'Beach', 'City', 'Diving'];

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigation = useNavigation();

  // 🔹 Filter experiences based on selected category
  const filteredExperiences =
    activeCategory === 'All'
      ? experiences
      : experiences.filter(item => item.category === activeCategory);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <CustomText style={styles.helloText} regular>Hello, Hazar</CustomText>
          <CustomText style={styles.title} bold>Let’s Travel</CustomText>
        </View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg3U6Fd9rdn-iwwOAdLAYsfuGIP55DBcISA&s' }}
          style={styles.profilePic}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Temukan Liburan Anda"
          placeholderTextColor="#A3A3A3"
          style={styles.searchInput}
        />
        <Ionicons name="search" size={20} color="#A3A3A3" />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              activeCategory === cat && styles.categoryButtonActive,
            ]}
            onPress={() => setActiveCategory(cat)}
          >
            <CustomText
              medium={activeCategory !== cat}
              bold={activeCategory === cat}
              style={[
                styles.categoryText,
                activeCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Experiences */}
      <CustomText style={styles.sectionTitle} medium>Popular Experiences</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
        {filteredExperiences.map(exp => (
          <HorizontalCard
            key={exp.id}
            title={exp.title}
            distance={exp.distance}
            image={exp.image}
          />
        ))}
      </ScrollView>

      {/* Featured Section */}
      <CustomText style={styles.sectionTitle} medium>Featured</CustomText>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            image: images.mountBromo,
            title: 'Mount Bromo',
            rating: 4.7,
          })
        }
      >
        <VerticalCard
          title="Mount Bromo"
          distance="5 km away"
          rating={4.7}
          image={images.mountBromo}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            image: images.SuetoOcean,
            title: 'Sua Ocean in Samoa',
            rating: 4.8,
          })
        }
      >
        <VerticalCard
          title="Sua Ocean in Samoa"
          distance="50 km away"
          rating={4.8}
          image={images.SuetoOcean}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F29',
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  helloText: {
    color: '#A3A3A3',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  searchContainer: {
    backgroundColor: '#1C2A34',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  categoryScroll: {
    marginTop: 20,
  },
  categoryButton: {
    backgroundColor: '#1C2A34',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#5EDFFF',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#0A1F29',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  cardScroll: {
    marginBottom: 10,
  },
});

export default HomeScreen;
