import { useQuery } from "@tanstack/react-query";
import useFooterStore from "../store/footer.store";
import FooterService from "../footer.service";

export const useGetFooterString = () => {
  const setFooterString = useFooterStore((state) => state.setFooterString);
  return useQuery(["getFooterString"], () => FooterService.getFooterString(), {
    onSuccess: (data) => {
      setFooterString(data);
    },
  });
};
