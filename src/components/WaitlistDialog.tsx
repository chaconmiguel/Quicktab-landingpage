import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AudienceType } from '@/lib/constants';
import { toast } from '@/components/ui/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { ShimmerButton } from '@/components/ui/ShimmerButton';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  audience: AudienceType;
}

export const WaitlistDialog: React.FC<WaitlistDialogProps> = ({
  open,
  onOpenChange,
  audience,
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data submitted:', data);
    
    // Show success toast
    toast({
      title: "¡Te has unido a la lista de espera!",
      description: "Te notificaremos cuando QuickTab esté disponible.",
      duration: 5000,
    });
    
    // Close the dialog
    onOpenChange(false);
    
    // Reset form
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Únete a la Lista de Espera</DialogTitle>
          <DialogDescription className="text-foreground/70">
            {audience === 'restaurant' 
              ? 'Recibe acceso prioritario a QuickTab para tu negocio.' 
              : 'Sé de los primeros en utilizar QuickTab como usuario.'}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@correo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+52 123 456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-4">
              <ShimmerButton 
                type="submit" 
                className="w-full py-2.5 md:py-3 text-sm md:text-base font-medium"
                background="linear-gradient(to right, #0055FF, #3B82F6)"
                shimmerColor="rgba(255, 255, 255, 0.4)"
              >
                Unirse a la Lista de Espera
              </ShimmerButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
