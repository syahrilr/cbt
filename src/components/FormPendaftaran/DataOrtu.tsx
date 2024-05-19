"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
  parentName: z.string().min(1, { message: "Nama Orangtua/Wali wajib diisi." }),
  relationship: z.string().min(1, { message: "Hubungan dengan pelajar wajib diisi." }),
  phone: z.string().min(1, { message: "Nomor Handphone wajib diisi." }),
  address: z.string().optional(),
});

export function FormOrtu() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      relationship: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className=" mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-bold">Data Orangtua/Wali</h2>
          <p className="text-sm text-gray-600">
            Data ini membantu kami untuk dapat terhubung dan <br /> berkoordinasi terkait peningkatan belajar calon pelajar kami.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold">
                Nama Orangtua/Wali <span className="text-red-500">*</span>
              </label>
              <Controller
                name="parentName"
                control={form.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nama Orangtua/Wali" />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">
                Hubungan dengan pelajar <span className="text-red-500">*</span>
              </label>
              <Controller
                name="relationship"
                control={form.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Hubungan dengan pelajar" />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">
                Nomor Handphone <span className="text-red-500">*</span>
              </label>
              <Controller
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nomor Handphone" />
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">
                Alamat Rumah <span className="text-red-500">*</span>
              </label>
             <Textarea placeholder="...."/>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
