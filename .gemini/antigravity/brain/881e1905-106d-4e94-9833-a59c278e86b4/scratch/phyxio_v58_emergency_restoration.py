import os
import shutil

def emergency_restore():
    src_root = r"C:\Users\USER\Desktop\Phyxio\frontend\src\antiguo_data_v2\fisica-clasica\mecanica\fluidos"
    dst_root = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    
    count = 0
    for root, dirs, files in os.walk(src_root):
        rel_path = os.path.relpath(root, src_root)
        target_dir = os.path.join(dst_root, rel_path)
        
        for file in files:
            if file in ["magnitudes.yaml", "formulas.yaml", "meta.yaml"]:
                src_file = os.path.join(root, file)
                dst_file = os.path.join(target_dir, file)
                
                if os.path.exists(dst_file):
                    shutil.copy2(src_file, dst_file)
                    count += 1
                    print(f"Restored: {dst_file}")
                    
    return count

if __name__ == "__main__":
    count = emergency_restore()
    print(f"\nDone. Restored {count} core files.")
