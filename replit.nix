{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.libwebp
        pkgs.nodePackages.typescript
        pkgs.libuuid
        pkgs.ffmpeg
        pkgs.imagemagick  
        pkgs.wget
        pkgs.git
        pkgs.nodePackages.pm2
        pkgs.yarn
    ];
  env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}
