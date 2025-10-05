import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  GetAllGigsResponse,
  GetAllParams,
  GetOneGigResponse,
  GigFormData,
} from "../types";
import api from "./axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const gigService = {
  getAll: (params: GetAllParams) => api.get<GetAllGigsResponse>("/gigs", { params }),
  getOne: (id: string) => api.get<GetOneGigResponse>(`/gigs/${id}`),
  create: (body: GigFormData) => api.post<GetOneGigResponse>(`/gigs/`, body),
  delete: (id: string) => api.delete<GetOneGigResponse>(`/gigs/${id}`),
};

export const useGetAllGigs = (params: GetAllParams) => {
  return useQuery({
    queryKey: ["gigs"],
    queryFn: () => gigService.getAll(params),
  });
};

export const useGetOneGig = (id: string) => {
  return useQuery({
    queryKey: ["gig", id],
    queryFn: () => gigService.getOne(id),
    select: (res) => res.data.gig,
  });
};
export const useCreateGig = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create-gig"],
    mutationFn: gigService.create,
    onSuccess: (res) => {
      navigate(`/detail/${res.data.gig._id}`);
      toast.success("Gig created successfully");
    },
    onError: () => {
      toast.error("Gig creation failed");
    },
  });
};
export const useDeleteGig = (id: string) => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["delete-gig"],
    mutationFn: gigService.delete(id),
    onSuccess: () => {
      toast.success("Gig deleted successfully");
      //useGetAllGigs api istegini tekrar tetikliyor
      client.invalidateQueries({ queryKey: ["gigs"] });
    },
    onError: () => {
      toast.error("Gig deletion failed");
    },
  });
};
