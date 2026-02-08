import { Request, Response } from "express";
import { specialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchAsync";


const createSpeciality = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await specialityService.createSpeciality(payload);

  res.status(201).json({
    success: true,
    message: "Speciality created successfully",
    data: result,
  });
});




const getAllSpecialities = catchAsync(async (req: Request, res: Response) => {
  const result = await specialityService.getAllSpecialities();

  res.status(201).json({
    success: true,
    message: "Speciality fetched successfully",
    data: result,
  });
});




const updateSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  const result = await specialityService.updateSpeciality(
    id as string,
    payload,
  );

  res.status(201).json({
    success: true,
    message: "Speciality updated successfully",
    data: result,
  });
});




const deleteSpeciality = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await specialityService.deleteSpeciality(id as string);

  res.status(201).json({
    success: true,
    message: "Speciality delete successfully",
    data: result,
  });
});





export const specialityController = {
  createSpeciality,
  getAllSpecialities,
  updateSpeciality,
  deleteSpeciality,
};
