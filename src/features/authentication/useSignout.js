import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signout as signoutApi } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import { useUi } from "../../contexts/UiContext";

export function useSignout() {
  const { resetUi } = useUi();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signout, isPending } = useMutation({
    mutationFn: signoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      resetUi();
      navigate("/signin", { replace: true });
    },
  });

  return { signout, isPending };
}
