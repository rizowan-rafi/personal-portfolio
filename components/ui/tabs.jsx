"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn("flex flex-col gap-2", className)}
            {...props}
        />
    );
}

function TabsList({ className, ...props }) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            className={cn(
                "inline-flex rounded-md h-auto p-1 text-primaryColor ",
                className
            )}
            {...props}
        />
    );
}

function TabsTrigger({ className, ...props }) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                "inline-flex  items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accentDefault data-[state=active]:text-primaryColor data-[state=active]:font-bold data-[state=active]:shadow-sm",
                className
            )}
            {...props}
        />
    );
}

function TabsContent({ className, ...props }) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn("min-h-[480px] flex-1 outline-none", className)}
            {...props}
        />
    );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
