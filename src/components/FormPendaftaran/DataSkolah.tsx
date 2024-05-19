"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckboxGroup } from "@/components/ui/checkboxgrup";

const formSchema = z.object({
  sekolahName: z.string().min(1, { message: "Nama Sekolah wajib diisi." }),
  kelas: z
    .string()
    .min(1, { message: "Kelas/Tingkat pendidikan wajib diisi." }),
  programPaket: z.array(z.string()).nonempty("Program Paket wajib dipilih."),
  programExclusive: z
    .array(z.string())
    .nonempty("Program Paket wajib dipilih."),
});

const options = [
  { label: "Paket Kelas 1 SD", value: "paket_kelas_1_sd" },
  { label: "Paket Kelas 2 SD", value: "paket_kelas_2_sd" },
  { label: "Paket Kelas 3 SD", value: "paket_kelas_3_sd" },
  { label: "Paket Kelas 4 SD", value: "paket_kelas_4_sd" },
  { label: "Paket Kelas 5 SD", value: "paket_kelas_5_sd" },
  { label: "Paket Kelas 6 SD", value: "paket_kelas_6_sd" },
  { label: "Paket Kelas 1 SMP", value: "paket_kelas_1_smp" },
  { label: "Paket Kelas 2 SMP", value: "paket_kelas_2_smp" },
  { label: "Paket Kelas 3 SMP", value: "paket_kelas_3_smp" },
  { label: "Paket Kelas 1 SMA", value: "paket_kelas_1_sma" },
  { label: "Paket Kelas 2 SMA", value: "paket_kelas_2_sma" },
  { label: "Paket Kelas 3 SMA", value: "paket_kelas_3_sma" },
];

const options1 = [
  { label: "Exclusive UTBK SD", value: "Exclusive UTBK SD" },
  { label: "Exclusive UTBK SMP", value: "Exclusive UTBK SMP" },
  { label: "Exclusive UTBK SMA", value: "Exclusive UTBK SMA" },
  { label: "Exclusive SNBT ", value: "Exclusive SNBT" },
  { label: "Exclusive TOEFL ", value: "Exclusive TOEFL" },
  { label: "Exclusive IELTS ", value: "Exclusive IELTS" },
  { label: "Exclusive CPNS ", value: "Exclusive CPNS" },
  { label: "Exclusive STAN ", value: "Exclusive STAN" },
];

const DataSkolah = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sekolahName: "",
      kelas: "",
      programPaket: [],
      programExclusive: [],
    },
  });
  return (
    <form className=" mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-bold">Informasi Sekolah</h2>
          <p className="text-sm text-gray-600">
            Informasi ini akan menjadi jembatan yang sangat berharga <br />
            antara kami untuk memahami lingkungan pendidikan calon pelajar kami.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold">
                Nama Sekolah <span className="text-red-500">*</span>
              </label>
              <Controller
                name="sekolahName"
                control={form.control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nama Sekolah" />
                )}
              />
            </div>

            {/*  Kelas/Tingkat Pendidikan */}
            <div>
              <label className="block text-sm font-semibold">
                Kelas/Tingkat Pendidikan <span className="text-red-500">*</span>
              </label>
              <Controller
                name="kelas"
                control={form.control}
                render={({ field }) => (
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue {...field} placeholder="--Pilih--" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>--Pilih--</SelectLabel>
                        <SelectItem value="SD-Kelas-1">
                          Sekolah Dasar kelas 1
                        </SelectItem>
                        <SelectItem value="SD-Kelas-2">
                          Sekolah Dasar kelas 2
                        </SelectItem>
                        <SelectItem value="SD-Kelas-3">
                          Sekolah Dasar kelas 3
                        </SelectItem>
                        <SelectItem value="SD-Kelas-4">
                          Sekolah Dasar kelas 4
                        </SelectItem>
                        <SelectItem value="SD-Kelas-5">
                          Sekolah Dasar kelas 5
                        </SelectItem>
                        <SelectItem value="SD-Kelas-6">
                          Sekolah Dasar kelas 6
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Program Belajar Pilihan */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        <div>
          <h2 className="font-bold">Progarm Belaja Pilihan</h2>
          <p className="text-sm text-gray-600">
            Informasi ini akan menjadi jembatan yang sangat berharga <br />{" "}
            antara kami untuk memahami lingkungan pendidikan calon pelajar kami.
          </p>
        </div>

        <FormProvider {...form}>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-semibold">
                Program Paket
              </label>
              <CheckboxGroup name="programPaket" options={options} />
            </div>
            <div>
              <label className="block text-sm font-semibold">
                Program Exclusif
              </label>

              <CheckboxGroup name="programExclusive" options={options1} />
            </div>
          </div>
        </FormProvider>
      </div>

      {/* Jadwal belajar */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        <div>
          <h2 className="font-bold">Jadwal Belajar</h2>
          <p className="text-sm text-gray-600">
            Informasi ini membantu kami untuk menyusun program <br />
            bimbingan belajar yang sesuai dengan ritme dan ketersediaan waktu
            Anda
          </p>
        </div>

        <div className="grid grid-cols-1 space-y-2 mt-2 md:grid-cols-2">
          <div className="">
            <label className="block text-sm font-semibold">Pilihan Hari</label>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Senin-Rabu-Jumat</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Selasa-Kamis-Sabtu</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Minggu</Label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold">Pilihan Waktu</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">08.00 - 09.30 WITA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">10.00 - 11.30 WITA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">13.00 - 14.30 WITA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">15.00 - 16.30 WITA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">17.00 - 18.30 WITA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">19.00 - 20.30 WITA</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DataSkolah;
