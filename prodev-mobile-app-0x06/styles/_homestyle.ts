// styles/_homestyle.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  searchGroup: {
    padding: 12,
    backgroundColor: "#f5f5f5",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 14,
    color: "#555",
  },

  searchControl: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 4,
  },

  searchButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },

  filterGroup: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export { styles };
