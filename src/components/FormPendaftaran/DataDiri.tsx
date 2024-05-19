"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PhotoIcon } from "@heroicons/react/24/solid";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  birthdate: z.date().nullable(),
  address: z.string().min(1, {
    message: "address is require.",
  }),
});

export function DataDiri() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthdate: null,
      username: "",
      address: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={() => (
            <FormItem className="">
              <FormLabel className="font-bold text-xl">
                FORMULIR PENDAFTARAN
              </FormLabel>
              <FormDescription>
                Harap pastikan bahwa setiap informasi yang Anda berikan bersifat
                akurat. Kami tentunya menjamin kerahasiaan data dan hanya akan
                menggunakannya untuk kepentingan pengembangan pendidikan Anda.
              </FormDescription>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                  <h2 className="font-bold">Data Pribadi Pelajar</h2>
                  <p className="text-sm text-gray-600">
                    Setiap detail tentang pelajar adalah <br /> bagian berharga {" "}
                    dari perjalanan pendidikan calon pelajar kami.
                  </p>
                </div>
                <div className="">
                  {/* foto */}
                  <div>
                    <FormLabel className="font-semibold">
                      Foto <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="col-span-full">
                        <label
                          htmlFor="cover-photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <PhotoIcon
                              className="mx-auto h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {/* Nama depan */}
                    <div>
                      <FormLabel className="font-semibold">
                        Nama Depan <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl className="">
                        <Input placeholder="Nama Depan" />
                      </FormControl>
                    </div>

                    {/* Nama Belakang */}
                    <div>
                      <FormLabel className="font-semibold">
                        Nama Belakang <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl className="">
                        <Input placeholder="Nama Belakang" />
                      </FormControl>
                    </div>

                    {/* kota kelahiran */}
                    <div>
                      <FormLabel className="font-semibold">
                        Kota Kelahiran <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl className="">
                        <Input placeholder="Kota Kelahiran" />
                      </FormControl>
                    </div>

                    {/* tanggal lahir */}
                    <div>
                      <FormLabel className="font-semibold">
                        Tanggal Lahir <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl className="">
                        <Controller
                          control={form.control}
                          name="birthdate"
                          render={({ field }) => (
                            <ReactDatePicker
                              placeholderText="Pick a date"
                              onChange={(date: Date) => field.onChange(date)}
                              selected={field.value}
                              dateFormat="PPP"
                              customInput={
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Pick a date"}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              }
                            />
                          )}
                        />
                      </FormControl>
                    </div>
                  </div>

                  {/* Jenis Kelamin */}
                  <div className="mt-2">
                    <FormLabel className="font-semibold">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="--Pilih--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>--Pilih--</SelectLabel>
                          <SelectItem value="Laki-Laki">Laki - Laki</SelectItem>
                          <SelectItem value="Perempuan">Perempuan</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Alamat Rumah */}
                  <div className="mt-2">
                    <FormLabel className="font-semibold">
                      Alamat Rumah <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="...." />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </div>
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
