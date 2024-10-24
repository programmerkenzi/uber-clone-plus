import { Image, Text, View } from "react-native";
import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types";

const RideCard = ({ ride }: { ride: Ride }) => {
  console.log(
    `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
  );
  return (
    <View className="flex flex-row justify-center items-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
      <View className="flex flex-col justify-center items-start p-3">
        <View className="flex flex-row justify-between items-center">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />

          <View className="flex flex-col flex-1 gap-y-5 mx-5">
            <View className="flex flex-row gap-x-2 items-center">
              <Image source={icons.to} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>

            <View className="flex flex-row gap-x-2 items-center">
              <Image source={icons.point} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col justify-center items-start p-3 mt-5 w-full rounded-lg bg-general-500">
          <View className="flex flex-row justify-between items-center mb-5 w-full">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaBold" numberOfLines={1}>
              {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center mb-5 w-full">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Driver
            </Text>
            <Text className="text-md font-JakartaBold">
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center mb-5 w-full">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Car Seats
            </Text>
            <Text className="text-md font-JakartaBold">
              {ride.driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center w-full">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Payment Status
            </Text>
            <Text
              className={`text-md capitalize font-JakartaBold ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
