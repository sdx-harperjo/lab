import { ItemPicker } from "@/components/mobile/ItemPicker";
import type { PickItem } from "@/hooks/UsePickItems";

type ReceiveItemChooserProps = {
  onSelect: (item: PickItem) => void;
};

export function ReceiveItemChooser({ onSelect }: ReceiveItemChooserProps) {
  return <ItemPicker onSelect={onSelect} />;
}
